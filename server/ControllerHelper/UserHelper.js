const UserHelper = {
/**
   * Get user's profile'
   * @param {Object} value object containing user's details
   * @returns {Object} return user's value
   */
  userProfile(value) {
    return {
      id: value.id,
      userName: value.userName,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      roleId: value.roleId,
      createAt: value.createdAt,
      updatedAt: value.updatedAt
    };
  }
}
;
export default UserHelper;
