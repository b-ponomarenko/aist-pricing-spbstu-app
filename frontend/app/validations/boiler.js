import {validatePresence, validateNumber} from "ember-changeset-validations/validators";

export default {
  name: validatePresence({
    presence: true, message: 'Название бака не может быть пустым'
  }),
  diameter: validateNumber({
    positive: true, message: 'Значение диаметра должно быть больше нуля'
  }),
  shellHeight: validateNumber({
    positive: true, message: 'Значение высоты обечайки должно быть больше нуля'
  }),
  bottomHeight: validateNumber({
    positive: true, message: 'Значение высоты днища должно быть больше нуля'
  }),
  shellThickness: validateNumber({
    positive: true, message: 'Значение толщины стенки обечайки должно быть больше нуля'
  }),
  weight: validateNumber({
    positive: true, message: 'Значение веса должно быть больше нуля'
  })
}