const today = new Date()
const at = hours => today.setHours(hours, 0)

export const sampleAppointments = [
  { startsAt: at(9), customer: { firstName: 'Van', lastName: 'Huynh', phoneNumber: '0401223456', stylist: 'Coco', service: 'dry blow', notes: 'refer cold blow' } },
  { startsAt: at(10), customer: { firstName: 'Cam', lastName: 'Tran', phoneNumber: '0401223906', stylist: 'Lulu', service: 'color dying', notes: 'refer natural' } },
  { startsAt: at(11), customer: { firstName: 'Vicky', lastName: 'Ma', phoneNumber: '0401223456', stylist: 'Coco', service: 'dry blow', notes: 'refer cold blow' } },
  { startsAt: at(12), customer: { firstName: 'Vanessa', lastName: 'Huynh', phoneNumber: '0401223456', stylist: 'Coco', service: 'dry blow', notes: 'refer cold blow' } },
  { startsAt: at(13), customer: { firstName: 'Edith', lastName: 'Huynh', phoneNumber: '0401223456', stylist: 'Coco', service: 'dry blow', notes: 'refer cold blow' } }
]