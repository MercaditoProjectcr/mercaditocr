// describe('crud controllers', () => {
//     describe('getOne', async () => {
//       test('finds by authenticated user and id', async () => {
//         expect.assertions(2)
  
//         const user = mongoose.Types.ObjectId()
//         const list = await List.create({ name: 'list', createdBy: user })
  
//         const req = {
//           params: {
//             id: list._id
//           },
//           user: {
//             _id: user
//           }
//         }
  
//         const res = {
//           status(status) {
//             expect(status).toBe(200)
//             return this
//           },
//           json(result) {
//             expect(result.data._id.toString()).toBe(list._id.toString())
//           }
//         }
  
//         await getOne(List)(req, res)
//       })
  
//       test('404 if no doc was found', async () => {
//         expect.assertions(2)
  
//         const user = mongoose.Types.ObjectId()
  
//         const req = {
//           params: {
//             id: mongoose.Types.ObjectId()
//           },
//           user: {
//             _id: user
//           }
//         }
  
//         const res = {
//           status(status) {
//             expect(status).toBe(400)
//             return this
//           },
//           end() {
//             expect(true).toBe(true)
//           }
//         }
  
//         await getOne(List)(req, res)
//       })
//     })