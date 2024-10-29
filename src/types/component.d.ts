// types/components.d.ts
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}

// 组件实例类型
// types/components.d.ts
//解释一下
// 1. 通过 typeof 获取组件的类型
// 2. 通过 InstanceType 获取组件的实例类型
// 3. 通过 export type 导出类型
// 4. 通过 = InstanceType<typeof XtxSwiper> 获取组件的实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
