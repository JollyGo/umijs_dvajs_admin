import {Constant} from './_utils'
import {Base64} from 'js-base64'
const { ApiPrefix } = Constant

const EnumRoleType = {
    ADMIN: 'admin',
    DEFAULT: 'guest',
    DEVELOPER: 'developer',
  }

const userPermission = {
    DEFAULT: {
      visit: ['1', '2', '21', '7', '5', '51', '52', '53'],
      role: EnumRoleType.DEFAULT,
    },
    ADMIN: {
      role: EnumRoleType.ADMIN,
    },
    DEVELOPER: {
      role: EnumRoleType.DEVELOPER,
    },
  }

let adminUsers=[
    {
        id: 0,
        username: 'admin',
        password: 'admin',
        permissions: userPermission.ADMIN,
        // avatar: randomAvatar(),
      },
      {
        id: 1,
        username: 'guest',
        password: 'guest',
        permissions: userPermission.DEFAULT,
        // avatar: randomAvatar(),
      },
      {
        id: 2,
        username: '吴彦祖',
        password: '123456',
        permissions: userPermission.DEVELOPER,
        // avatar: randomAvatar(),
      },
]

module.exports ={
    [`POST ${ApiPrefix}/login`](req, res) {
        console.log(req)
        const { username, password } = req.body
        const user = adminUsers.filter(item => item.username === username)
    
        if (user.length > 0 && user[0].password === password) {
          const now = new Date()
          now.setDate(now.getDate() + 1)
          res.cookie(
            'token',
            JSON.stringify({ id: user[0].id, deadline: now.getTime() }),
            {
              maxAge: 900000,
              httpOnly: true,
            }
          )
          res.json({ result:[{success: true, message: 'Ok'}] })
        } else {
          res.status(401).end()
        }
      }

}