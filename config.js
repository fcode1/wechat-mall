module.exports = {
  version: "6.2.2",
  note: '充值界面增加快捷选择金额',
  subDomain: "wxmini",//域名
  appid: "wx2ddbecb18cd766c1",
  shareProfile: '百款精品商品，总有一款适合您' //分享语
}
/*
根据自己需要修改下单时候的模板消息内容设置，可增加关闭订单、收货时候模板消息提醒；
1、/pages/to-pay-order/index.js 中已添加关闭订单、商家发货后提醒消费者；
2、/pages/order-details/index.js 中已添加用户确认收货后提供用户参与评价；评价后提醒消费者好评奖励积分已到账；
3、请自行修改上面几处的模板消息ID，参数为您自己的变量设置即可。  
*/