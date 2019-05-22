export function getList(params) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        'code': 20000, 'data': {
          'items': [{
            'seq': '1',
            'goodsNo': '0001',
            'recordNo': '0001',
            'goodsName': '商品1',
            'spec': '1*1*1',
            'ori': '中国',
            'num': 200,
            'unit': '件',
            'price': 300,
            'coinType': '人民币',
            'total': '60000',
            'free': '是',
            'dest': '美国',
            'oriAddr': '中国 厦门',
            'oriAddrInfo': '厦门 思明',
            'danger': '是',
            'supervise': '是'
          }, {
            'seq': '2',
            'goodsNo': '0001',
            'recordNo': '0001',
            'goodsName': '商品1',
            'spec': '1*1*1',
            'ori': '中国',
            'num': 200,
            'unit': '件',
            'price': 300,
            'coinType': '人民币',
            'total': '60000',
            'free': '是',
            'dest': '美国',
            'oriAddr': '中国 厦门',
            'oriAddrInfo': '厦门 思明',
            'danger': '是',
            'supervise': '是'
          }]
        }
      })
    }, 500)
  })
}
