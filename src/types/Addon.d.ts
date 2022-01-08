import { IDocProfile, IProfile, IProfileTemp } from "profile"
import { ReplaceParam } from "utils/input"
import { StudyController } from "./MarginNote"
import { MbBookNote } from "./MarginNote/MbBookNote"
import { UIWindow, UITableView, UITableViewController } from "./UIKit"

interface LabelType {
  type: cellViewType
  label: string
}

interface KeyLabelType extends LabelType {
  key: string
}

interface ISettingBasic extends KeyLabelType {
  help?: string
  link?: string
}

export const enum cellViewType {
  plainText = 0,
  switch = 1,
  button = 2,
  buttonWithInput = 3,
  input = 4,
  inlineInput = 5,
  select = 6,
  muiltSelect = 7
}

export interface IConfig {
  name: string
  intro: string
  link?: string
  settings: ISetting[]
  actions: IAction[]
}

export type ISetting =
  | ISettingButton
  | ISettingInput
  | ISettingSwitch
  | ISettingSelect

export interface ISettingInput extends ISettingBasic {
  type: cellViewType.input | cellViewType.inlineInput
  bind?: [string, number]
}

export interface ISettingButton extends ISettingBasic {
  type: cellViewType.button | cellViewType.buttonWithInput
  /** button 的 link 不起作用 */
  link?: undefined
  option?: string[]
}

export interface ISettingSelect extends ISettingBasic {
  type: cellViewType.select | cellViewType.muiltSelect
  option: string[]
}

export interface ISettingSwitch extends ISettingBasic {
  type: cellViewType.switch
}

export type IAction = IRowButton

// 生成的 DataSource
export interface ISection {
  header: string
  rows: Array<IRow>
}

export type IRow =
  | IRowPlainText
  | IRowSwitch
  | IRowInput
  | IRowButton
  | IRowSelect

export interface IRowPlainText extends LabelType {
  type: cellViewType.plainText
  link: string
  bind?: [string, number]
}

export interface IRowSwitch extends KeyLabelType {
  type: cellViewType.switch
  status: boolean
}

export interface IRowInput extends KeyLabelType {
  type: cellViewType.input | cellViewType.inlineInput
  content: string
  bind?: [string, number]
}

export interface IRowButton extends KeyLabelType {
  type: cellViewType.button | cellViewType.buttonWithInput
  help?: string
  option?: string[]
}

export interface IRowSelect extends KeyLabelType {
  type: cellViewType.select | cellViewType.muiltSelect
  selections: number[]
  option: string[]
}

export interface IActionMethod {
  [k: string]: ({
    content,
    nodes,
    option
  }: {
    content: string
    nodes: MbBookNote[]
    option: number
  }) => any
}

export interface eventHandler {
  (sender: {
    // 不是都有哈，具体要看发送了什么
    userInfo: {
      key: string
      option: number
      row: IRowButton
      content: string
      name: string
      status: boolean
      note: MbBookNote
      selections: number[]
      noteid: string
    }
  }): void
}

export interface gestureHandler {
  (sender: UIGestureRecognizer): void
}

declare global {
  const self: {
    [k: string]: any
    studyController: StudyController
    window: UIWindow
    docMD5?: string
    notebookid: string
    tableView: UITableView
    panelStatus: boolean
    docProfile: {
      [k: string]: { [k: string]: boolean | string | number[] }
    } & IDocProfile
    profile: {
      [k: string]: { [k: string]: boolean | string | number[] }
    } & IProfile
    profileTemp: {
      [k: string]: { [k: string]: RegExp[][] | ReplaceParam[] | undefined }
    } & IProfileTemp
    dataSource: ISection[]
    settingViewController: UITableViewController
  }
}
