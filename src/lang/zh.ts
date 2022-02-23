const dict = {
  module: {
    ohmymn: {
      link: "https://busiyi.notion.site/Gesture-468bbb3eca424c3bb85842e0b26138b8",
      option: {
        profile: "配置",
        has_title_then: ["保持原样", "标题链接", "覆盖标题"],
        panel_position: ["自动", "靠左", "居中", "靠右"],
        panel_height: ["高点", "标准", "矮点"],
        panle_control: [
          "双击图标打开面板",
          "双击面板关闭面板",
          "动作执行完关闭面板"
        ]
      },
      label: {
        has_title_then: "如果标题存在",
        quick_switch: "模块快捷开关",
        profile: "选择配置文件",
        panel_position: "面板显示位置",
        panel_height: "面板显示高度",
        panle_control: "面板开启关闭",
        screen_always_on: "保持屏幕常亮",
        lock_excerpt: "锁定摘录文字",
        auto_correct: "开启自动在线矫正了吗"
      },
      help: {
        profile: "【当前文档生效】不同情景，不同配置",
        has_title_then: "拖拽选区合并进卡片，如果会产生新标题，则",
        auto_correct: "【当前文档生效】务必和 MN 保持相同状态"
      }
    },
    gesture: {
      intro: "自定义手势触发动作",
      link: "https://busiyi.notion.site/Gesture-468bbb3eca424c3bb85842e0b26138b8",
      singleBar: "单选工具栏",
      muiltBar: "多选工具栏"
    },
    anotherautodef: {
      intro:
        "提取被定义项或任意内容为标题或标题链接\n定义 = 被定义项 + 定义联项 + 定义项",
      link: "https://busiyi.notion.site/AnotherAutoDef-13910b3b225743dcb72b29eabcc81e22",
      label: {
        only_desc: "摘录仅保留定义项",
        to_title_link: "别名转为标题链接",
        preset: "选择需要的预设",
        title_link_split: "选择别名分词",
        custom_title_split: "自定义别名分词，点击查看具体格式",
        custom_def_link: "自定义定义联项，点击查看具体格式",
        custom_extract_title: "自定义提取标题，点击查看具体格式",
        extract_title: "从摘录提取标题"
      },
      option: {
        title_link_split: ["自定义", "默认", "标点符号"],
        preset: [
          "自定义提取标题",
          "自定义定义联项",
          "xxx : yyy",
          "xxx —— yyy",
          "xxx ，是(指) yyy",
          "xxx 是(指)，yyy",
          "xxx 是指 yyy",
          "yyy，___称(之)为 xxx",
          "yyy(被)称(之)为 xxx"
        ],
        extract_title: ["使用 AutoDef 中的配置", "确定"]
      }
    },
    magicaction: {
      intro:
        "所有动作均需要先选中卡片\n点击查看所有动作具体的使用方法和注意事项",
      link: "https://busiyi.notion.site/MagicAction-c4fb456af9a7407683c5cd615481f04c",
      option: {
        filter_cards: ["仅筛选标题", "筛选整个卡片内容"],
        switch_title: ["切换为不存在的", "交换标题和摘录"],
        merge_text: ["合并为摘录", "合并为评论"],
        merge_cards: ["同时合并标题", "不合并标题"],
        manage_profile: ["读取配置信息", "写入配置信息"]
      },
      help: {
        merge_text: "输入分隔符",
        switch_title: "当两者都存在时请使用「交换标题和摘录」",
        rename_title: "现在可以分层进行编号",
        manage_profile: "禁止直接修改配置信息，读取后会覆盖现有配置",
        from_which_module: (module: string) =>
          `该动作来自于 ${module}，与其使用相同的配置`
      },
      label: {
        switch_title: "切换摘录标题",
        filter_cards: "筛选卡片",
        merge_cards: "合并卡片",
        merge_text: "合并卡片文字",
        rename_title: "重命名标题",
        manage_profile: "配置管理",
        smart_selection: "智能选择"
      },
      hud: {
        is_clicked: "您需要的卡片已选中，请继续操作",
        none_card: "未找到符合的卡片",
        hierarchical_numbering: "请确保选中的每张卡片均为同层级且都有子节点"
      }
    },
    autostandardize: {
      intro: "优化摘录和标题的排版与格式",
      link: "https://busiyi.notion.site/AutoStandrize-b5e0d381d4814139a1b73d305ebc12d1",
      option: {
        preset: [
          "自定义",
          "去除全部空格",
          "半角转全角",
          "中英文加空格",
          "去除中文间空格",
          "去除重复空格"
        ],
        standardize_selected: ["都优化", "仅优化标题", "仅优化摘录"]
      },
      help: {
        standardize_title: "涉及到首字母大写，点击查看具体规范"
      },
      label: {
        standardize_selected: "优化排版格式",
        standardize_title: "英文标题规范化",
        custom_standardize: "自定义，点击查看具体格式",
        preset: "选择需要的预设"
      }
    },
    autoreplace: {
      intro: "自动替换摘录中的某些错误",
      link: "https://busiyi.notion.site/AutoReplace-23df00035c97436e88a863925a08e57f",
      option: {
        preset: ["自定义"],
        replace_selected: ["使用 AutoReplace 的配置", "确定"]
      },
      label: {
        preset: "选择需要的预设",
        replace_selected: "替换摘录文字",
        custom_replace: "自定义，点击查看具体格式"
      }
    },
    autolist: {
      intro:
        "针对有序号的摘录，自动添加换行。所有预设均必须满足两个及以上，包括自定义",
      link: "https://busiyi.notion.site/AutoList-4c52b2607225450f913a6bfaba1f15ec",
      option: {
        preset: ["自定义", "ABCD...", "一二三四...", "1234..."],
        list_selected: ["使用 AutoList 的配置", "确定"]
      },
      label: {
        preset: "选择需要的预设",
        custom_list: "自定义，点击查看具体格式",
        list_selected: "序列摘录换行"
      }
    },
    autocomplete: {
      intro: "补全单词词形，只支持动词和名词",
      link: "https://busiyi.notion.site/AutoComplete-1eab78ee6d7648339e088c593326b5ca",
      label: {
        fill_word_info: "填充单词信息",
        custom_fill: "自定义单词填充信息，点击查看支持变量",
        complete_selected: "补全单词词形"
      },
      option: {
        complete_selected: ["仅补全单词词形", "同时填充单词信息"],
        fill_word_info: ["不填充", "自定义", "中文含义"]
      },
      error: {
        not_find_word: "查询不到该单词",
        forbid: "为减小服务器压力，禁止同时处理超过 5 张卡片"
      }
    },
    anotherautotitle: {
      intro: "什么样的摘录该自动转为标题？",
      link: "https://busiyi.notion.site/AnotherAutoTitle-bef78c75901e4895b4fa2d03d83c48d6",
      option: {
        preset: ["自定义", "根据字数", "不含有点号"]
      },
      label: {
        change_title_no_limit: "标题摘录始终为标题",
        preset: "选择需要的预设",
        custom_be_title: "自定义，点击查看具体格式",
        word_count:
          "[中文句子中的字数, 英文句子中的字数]，没超过就自动设置为标题"
      },
      help: {
        change_title_no_limit: "修改标题摘录选区，始终转为标题"
      }
    },
    autotag: {
      intro: "自动加标签",
      link: "https://busiyi.notion.site/AutoTag-3a7fc5e0b84e47d18366d4cb60c4943d",
      option: {
        preset: ["自定义"],
        tag_selected: ["使用 AutoTag 的配置", "确定"]
      },
      label: {
        preset: "选择需要的预设",
        custom_tag: "自定义，点击查看具体格式",
        tag_selected: "给卡片加标签"
      }
    },
    autostyle: {
      link: "https://busiyi.notion.site/AutoStyle-008cc0fae7844e7fb171ca948da91cb5",
      intro: "自动修改摘录颜色和样式",
      area: "面积",
      label: {
        preset: "选择需要的预设",
        change_style: "修改摘录样式",
        change_color: "修改摘录颜色",
        show_area: "显示摘录面积",
        default_text_excerpt_color: "文本摘录默认颜色",
        default_pic_excerpt_color: "图片摘录默认颜色",
        default_text_excerpt_style: "文本摘录默认样式",
        default_pic_excerpt_style: "图片摘录默认样式",
        word_count_area:
          "[中文句子中的字数, 英文句子中的字数, 选区面积]，超过则将摘录样式设置为线框，否则默认"
      },
      help: {
        change_color: "输入颜色索引，也就是顺序，1 到 16"
      },
      option: {
        change_style: ["使用 AutoStyle 的配置", "线框+填充", "填充", "线框"],
        change_color: ["使用 AutoStyle 的配置", "确定"],
        preset: [
          "样式由字数或面积决定",
          "颜色跟随卡片",
          "颜色跟随第一个兄弟节点",
          "颜色跟随父节点"
        ],
        style: ["无", "线框+填充", "填充", "线框"],
        color: [
          "无",
          "浅黄",
          "浅绿",
          "浅蓝",
          "浅红",
          "黄",
          "绿",
          "蓝",
          "红",
          "橘",
          "深绿",
          "深蓝",
          "深红",
          "白",
          "浅灰",
          "深灰",
          "紫"
        ]
      }
    },
    copysearch: {
      intro: "搜索和复制你想要的",
      link: "https://busiyi.notion.site/CopySearch-5977326e5d1640248e61ee855c4ef74b",
      lable: {
        multiple_titles: "如果有多个标题",
        multiple_excerpts: "如果有多个摘录",
        custom_copy: "自定义搜索或复制的内容，点击查看支持哪些变量",
        which_search_engine: "搜索引擎选择",
        search_card_info: "搜索卡片内容",
        copy_card_info: "复制卡片内容",
        separator_symbols_multiple_card: "分隔符",
        show_search_engine: "显示搜索链接"
      },
      option: {
        multiple_titles: ["所有标题", "第一个", "即时选择"],
        multiple_excerpts: ["所有摘录", "第一个", "即时选择"],
        search_card_info: ["搜索标题", "搜索摘录", "自定义内容"],
        copy_card_info: ["复制标题", "复制摘录", "自定义内容"],
        which_search_engine: [
          "即时选择",
          "中文",
          "英文",
          "词典",
          "翻译",
          "学术",
          "问题",
          "其他"
        ]
      },
      help: {
        show_search_engine: "点击查看如何自定义 URL",
        separator_symbols_multiple_card:
          "选中多张卡片时，用来隔开每张卡片的内容"
      },
      hud: {
        choose_you_want: (x: boolean) =>
          `发现您选中的卡片有多个${x ? "标题" : "摘录"}，请选择一个你想要的`,
        not_get_title: "没有获取到标题",
        not_get_excerpt: "没有获取到摘录，你看到的可能是评论",
        choose_search_engine: "本次使用哪一个搜索引擎",
        copy_seccess: "复制成功，快去粘贴吧",
        one_card_search: "默认搜索第一张卡片的内容，请不要选择多张卡片"
      }
    },
    more: {
      donate: "如果 OhMyMN 对你有所帮助，欢迎赞赏，点击即可直达二维码。",
      mn5: "由于 MN5 会重新设计插件系统，在 MN5 发布前 OhMyMN 将不再更新。",
      auto: "摘录时自动执行"
    }
  },
  handle_received_event: {
    input_saved: "输入已保存",
    input_clear: "输入已清空",
    auto_correct:
      "自动矫正和锁定摘录无法同时正常工作，请关闭任意一个，否则会出现意想不到的问题",
    lock_excerpt:
      "锁定摘录和自动矫正无法同时正常工作，请关闭任意一个，否则会出现意想不到的问题"
  },
  magic_action_handler: {
    not_selected: "未选中任何脑图卡片",
    smart_select: {
      title: "OhMyMN 智能选择",
      option: [
        "仅处理选中的卡片",
        "仅处理子节点",
        "仅处理所有后代节点",
        "处理选中的卡片及其后代节点"
      ],
      card_with_children: "检测到您选中的唯一卡片有子节点",
      cards_with_children: "检测到您选中的多张同层级卡片均有子节点"
    }
  },
  switch_panel: {
    better_with_mindmap: "OhMyMN 与脑图更配喔"
  },
  handle_user_action: {
    sure: "确定",
    input_error: "输入错误，请重新输入",
    gesture: {
      alert:
        "该功能打开后，OhMyMN 会监测在脑图卡片单选和多选工具栏上的滑动，并触发您设定的动作。\n该功能由 OhMyMN 提供，与 MarginNote 无关。请问您是否详细阅读使用文档，并知晓具体手势监测区域和相关使用风险",
      option: ["不清楚，查看文档", "我已知晓"],
      doc: "https://busiyi.notion.site/Gesture-468bbb3eca424c3bb85842e0b26138b8"
    }
  },
  implement_datasource_method: {
    none: "无",
    open_panel: "打开控制面板"
  },
  addon_life_cycle: {
    remove: "OhMyMN 已停用，配置已重置"
  },
  profile_manage: {
    success: "配置读取成功",
    fail: "配置读取失败",
    not_find: "未找到配置信息",
    prohibit: "「OhMyMN」配置（禁止直接修改）"
  },
  network: {
    null: "没有收到返回值，请检测网络",
    notJSON: "返回值不是 JSON 格式"
  },
  handle_gesture_event: {
    action_not_work: "未启用，该动作无法执行"
  },
  other: {
    cancel: "取消"
  }
}

export default dict
