import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AddressItem } from '@/types/address.d'
export const userAddressesStore = defineStore(
  'address',
  () => {
    const selectedAddress = ref<AddressItem>()
    const ChangeselectedAddress = (address: AddressItem) => {
      selectedAddress.value = address
    }
    return {
      selectedAddress,
      ChangeselectedAddress,
    }
  },
  // TODO: 持久化
  {
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
