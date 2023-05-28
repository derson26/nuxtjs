// export default defineEventHandler((event) => {
//     return {
//       users: [{name: 'Derson Ussuale', age: 39}, {name: 'Melanie Ussuale', age: 9}]
//     }
//   })


export default defineEventHandler((event) => {
    const users =  [{name: 'Derson Ussuale', age: 39}, {name: 'Melanie Ussuale', age: 9}]
    return new Promise<any>((resolve) => {
        setTimeout(()=>{
            resolve(users);
        }, 2000);
    })
  })