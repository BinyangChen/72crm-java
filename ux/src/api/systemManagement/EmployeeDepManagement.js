import request from '@/utils/request'

export function depDelete(data) {
  return request({
    url: 'manager/dept/deleteDept',
    method: 'post',
    data: data
  })
}

export function depEdit(data) {
  return request({
    url: 'manager/dept/setDept',
    method: 'post',
    data: data
  })
}

export function depSave(data) {
  return request({
    url: 'manager/dept/setDept',
    method: 'post',
    data: data
  })
}

export function usersAdd(params) {
  return request({
    url: 'manager/user/setUser',
    method: 'post',
    data: params
  })
}

// 角色列表
export function roleList(data) {
  return request({
    url: 'manager/role/getAllRoleList',
    method: 'post',
    data: data
  })
}

// 重置密码
export function resetPassword(data) {
  return request({
    url: 'admin/users/resetPassword',
    method: 'post',
    data: data
  })
}

/**
 * 批量修改密码接口
 * @param {*} data
 * password
 * id 用户数组
 */
export function adminUsersUpdatePwd(data) {
  return request({
    url: 'manager/user/resetPassword',
    method: 'post',
    data: data
  })
}


// 用户状态修改
export function usersEditStatus(data) {
  return request({
    url: 'manager/user/setUserStatus',
    method: 'post',
    data: data
  })
}