import moment from 'moment'
import _ from 'lodash'
export default {
  cl: function (e, v) {
    console.log(e, v)
  },
  creteObj: function (names, date, nameclass, initV) {
    moment.locale('ja')
    let year = moment(date).year()
    let mo = moment(date).month()
    let lengthofMonth = moment(date).daysInMonth()
    let dayOfWeek = _.range(lengthofMonth).map(v => {
      return moment({y: year, month: mo, d: v + 1}).format('ddd')
    })
    return _.range(names.length).reduce((ac, cv, i) => {
      ac[i + names[i]] = _.range(lengthofMonth).map(v => {
        return initV
      })
      return ac
    }, {dayOfWeek})
  }
}
