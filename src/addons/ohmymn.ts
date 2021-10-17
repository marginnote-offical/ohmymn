import mnaddon from "../../mnaddon.json"
const config: IConfig = {
  name: "OhMyMN",
  intro: `version: ${mnaddon.version} \nmade by @ourongxing`,
  link: "https://github.com/ourongxing/ohmymn",
  settings: [
    {
      label: "插件快捷开关",
      key: "quickSwitch",
      type: cellViewType.muiltSelect,
      option: [
        "① AnotherAutoTitle",
        "② AnotherAutoDef",
        "③ AutoStandardize",
        "④ AutoComplete",
        "⑤ AutoReplace",
        "⑥ AutoList"
      ]
    },
    {
      key: "panelPostion",
      type: cellViewType.select,
      option: ["自动", "靠左", "中间", "靠右"],
      label: "面板显示位置"
    },
    {
      key: "panelHeight",
      type: cellViewType.select,
      option: ["高点", "标准", "矮点"],
      label: "面板显示高度"
    },
    {
      key: "doubleClick",
      type: cellViewType.switch,
      label: "双击打开面板"
    },
    {
      key: "clickHidden",
      type: cellViewType.switch,
      label: "自动关闭面板"
    },
    {
      key: "lockExcerpt",
      type: cellViewType.switch,
      label: "锁定摘录文字"
    },
    {
      help: "【当前文档生效】开启后会在矫正后执行处理",
      key: "autoCorrect",
      type: cellViewType.switch,
      label: "是否开启自动在线矫正"
    }
  ],
  actions: []
}

const util = {}
const action = {}
export { config, util, action }