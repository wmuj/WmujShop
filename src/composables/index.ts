import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component.d'

// 猜你喜欢组件实例和滚动触底事件
export const useGuessList = () => {
  //猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()
  //滚动触底事件
  const onscrolltolower = () => {
    guessRef.value?.getGuessData()
  }
  return {
    guessRef,
    onscrolltolower,
  }
}
