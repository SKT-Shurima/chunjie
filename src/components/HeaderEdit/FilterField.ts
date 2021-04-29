export function getFilterField(list: any) {
  const checkValue = _.filter(list, item => item.check === true);
  const dataIndexs = _.map(checkValue, item => item.dataIndex);
  dataIndexs.push('operation');
  return dataIndexs;
}
