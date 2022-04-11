import { Addon, MN } from "../const"

const console = {
  log(obj: any, suffix = "normal") {
    JSB.log(`${Addon.key}-${suffix} %@`, obj)
  },
  error(obj: any, suffix = "error") {
    JSB.log(
      `${Addon.key}-${suffix} %@`,
      String(obj) === "[object Object]" ? JSON.stringify(obj) : String(obj)
    )
  },
  /** Unrelated to the real meaning, used for stringify objects */
  assert(obj: any, suffix = "normal") {
    JSB.log(`${Addon.key}-${suffix} %@`, JSON.stringify(obj))
  }
}

const showHUD = (message: string, duration = 2, window = self.window) => {
  MN.app.showHUD(message, window, duration)
}

const HUDController = {
  show(message: string, window = self.window) {
    MN.app.waitHUDOnView(message, window)
  },
  hidden(window = self.window) {
    MN.app.stopWaitHUDOnView(window)
  }
}

const alert = (message: string) => {
  MN.app.alert(message)
}

const getObjCClassDeclar = (
  name: string,
  type: string,
  delegate: Array<string> = []
) => {
  let str = `${name} : ${type}`
  if (delegate.length) {
    delegate.forEach(value => {
      str = `${str} ${value}Delegate`
    })
  }
  return str
}

const delay = (sec: number) =>
  new Promise(resolve =>
    NSTimer.scheduledTimerWithTimeInterval(sec, false, resolve)
  )

const delayBreak = async (
  times: number,
  sec: number,
  f: () => boolean
): Promise<boolean> => {
  for (let i = 0; i < times; i++) {
    await delay(sec)
    if (f()) return true
  }
  return false
}

const openUrl = (url: string) => {
  MN.app.openURL(NSURL.URLWithString(encodeURI(url)))
}

const postNotification = (key: string, userInfo: any) => {
  NSNotificationCenter.defaultCenter().postNotificationNameObjectUserInfo(
    key,
    self,
    userInfo
  )
}

const isThisWindow = (sender: any, window = self.window) => {
  return MN.app.checkNotifySenderInWindow(sender, window)
}

const isOCNull = (obj: any): obj is OCNull => obj === NSNull.new()

const OCNull2null = <T>(k: T) => {
  return isOCNull(k) ? null : (k as Exclude<T, OCNull>)
}

const eventHandlerController = (
  handlerList: ({ event: string; handler?: string } | string)[]
): {
  add: () => void
  remove: () => void
} => {
  const add = () => {
    handlerList.forEach(v => {
      v = typeof v == "string" ? { event: v } : v
      NSNotificationCenter.defaultCenter().addObserverSelectorName(
        self,
        v.handler
          ? `${v.handler}:`
          : v.event.includes(Addon.key)
          ? `on${v.event.replace(Addon.key, "")}:`
          : `on${v.event}:`,
        v.event
      )
    })
  }
  const remove = () => {
    handlerList.forEach(v => {
      NSNotificationCenter.defaultCenter().removeObserverName(
        self,
        typeof v == "string" ? v : v.event
      )
    })
  }
  return { add, remove }
}

export {
  console,
  showHUD,
  HUDController,
  alert,
  delay,
  delayBreak,
  getObjCClassDeclar,
  openUrl,
  postNotification,
  isThisWindow,
  isOCNull,
  OCNull2null,
  eventHandlerController
}
