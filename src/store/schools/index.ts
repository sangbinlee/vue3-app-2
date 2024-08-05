import { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API } from '../../services'
import { InputCreateSchool, InputUpdateSchool, School } from '../../services/schools/types'
import { APIResponse } from '../../services/types'

export const useSchoolStore = defineStore('schoolStore', () => {
  const schools = ref<School[]>([])

  function initSchools(data: School[]) {
    schools.value = data
  }

  function addNewSchool(school: School) {
    schools.value.push(school)
  }

  function removeSchool(id: number) {
    const idx = schools.value.findIndex((s) => s.id === id)
    if (idx === -1) return
    schools.value.splice(idx, 1)
  }

  async function dispatchGetSchools(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.schools.getSchools()
      if (status === 200) {
        initSchools(data.content)
        return {
          success: true,
          content: null
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  async function dispatchCreateSchool(input: InputCreateSchool): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.school.createSchool(input)
      if (status === 200) {
        addNewSchool(data.content)
        return {
          success: true,
          content: null
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  async function dispatchDeleteSchool(id: number): Promise<APIResponse<null>> {
    try {
      const { status } = await API.school.deleteSchool(id)
      if (status === 200) {
        removeSchool(id)
        return {
          success: true,
          content: null
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  async function dispatchUpdateSchool(input: InputUpdateSchool): Promise<APIResponse<null>> {
    try {
      const { status } = await API.school.updateSchool(input)
      if (status === 200) {
        return {
          success: true,
          content: null
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  return {
    schools,
    initSchools,
    removeSchool,
    dispatchGetSchools,
    dispatchCreateSchool,
    dispatchDeleteSchool,
    dispatchUpdateSchool
  }
})
