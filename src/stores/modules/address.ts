import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AddressItem } from '@/types/address.d'
export const userAddressesStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const ChangeselectedAddress = (address: AddressItem) => {
    selectedAddress.value = address
  }
  return {
    selectedAddress,
    ChangeselectedAddress,
  }
})
