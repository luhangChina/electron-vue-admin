
export function getList(params) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        'code': 20000, 'data': {
          'items': new Array(20).fill({
            'name': '陆航',
            'date': '2019-10-20 23:00:00'
          })
        }
      })
    }, 500)
  })
}

export function createPerson(params) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        'code': 20000, 'data': {
          success: 1
        }
      })
    }, 500)
  })
}
