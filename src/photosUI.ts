import * as ui from '../node_modules/@dcl/ui-utils/index'

export function openPhotosUI() {
  let p = new ui.CenterImage(
    'images/phone/Phone.png',
    4,
    false,
    0,
    0,
    512 / 2,
    1024 / 2,
    { sourceWidth: 512, sourceHeight: 1024 }
  )
}
