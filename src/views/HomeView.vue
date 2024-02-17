<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <div class="z-[99] w-full px-4 top-0 left-0 fixed h-[70px] bg-black flex justify-between">
      <div class="flex w-full  lg:px-4 h-full items-center gap-3">
        <img src="@/assets/TSOL_Banner.png" class="w-[160px] h-auto" />
        <div class="hidden md:block ml-2"><a href="#" class="hoverable">Twitter</a></div>
        <div  class="hidden md:block ml-2"><a href="#" class="hoverable">Telegram</a></div>
        <!-- <div class="text-[#9400ff] underline underline-offset-8 hidden md:block">Mintinglab</div> -->
        <div class="hidden md:block ml-2"><a href="#" class="hoverable">Chart</a></div>
        <div  class="hidden md:block ml-2"><a href="#" class="hoverable">Rugchecker</a></div>
      </div>
      <div class="flex items-center gap-3">
        <button
  class="border bg-[#22223e] py-2 bg-gradient-border transition transform ease-in-out duration-300 text-center space-x-2 flex items-center w-full rounded-2xl px-4 text-xs font-light text-slate-100 overflow-hidden whitespace-nowrap hover:scale-105"
>
  Buy $TOKEN/SOL
</button>



        <Settings />
      </div>
    </div>

    <!-- body -->
    <div class="w-full container mx-auto pt-[118px] px-3">
      <div class="flex px-6 justify-start flex-wrap space-x-4 md:text-[20px]  my-2">
        <div class="cursor-pointer">My Tokens</div>
        <div class="cursor-pointer text-gradient">Token Minting</div>
        <div class="cursor-pointer">Statistics</div>
      </div>

      <div class="bg-[#1c1c33] rounded-lg px-4 lg:px-8 py-4 sm:py-8 mb-8">
        <div class="bg-[#22223e] p-6 mb-5 rounded-lg flex flex-col md:flex-row justify-between gap-3 md:gap-0">
          <div class="flex flex-col items-center md:items-start">
            <div class="text-xl font-bold">Token Minting</div>
            <div class="font-medium text-sm text-gray-400">Create and issue SPL Token.</div>
          </div>
          <div class="flex items-center justify-center">
            <button class="py-2 w-[150px] bg-primary-gradient rounded-full text-[14px]">
              My Tokens
            </button>
            <button class="py-2 w-[180px] ml-1 bg-primary rounded-full text-[14px]">
              OpenBook Manger
            </button>
          </div>
        </div>
        <div class="bg-[#22223e] p-6">
          <div class="rounded-lg md:grid grid-cols-2 ">
            <div class="flex flex-col px-3">
              <div>TOKEN INFORMATION</div>
              <div class="text-sm py-2 mb-6">
                This website is restarted and fictional so don't be a chimpanzee and try to actually generate a token here. Ape into this project for good fortune in 2024. May god blast you.
              </div>
              <div class="flex flex-col gap-6">
                <div class="flex flex-col">
                  <div class="text-xs font-medium text-gray-200 mb-1">Token Name (ex. Siuuuu Coin)</div>
                  <input
                    v-model="tokenName"
                    placeholder="Enter token name"
                    type="text"
                    class="relative rounded-lg bg-[#17172a] px-4 py-1.5 w-full text-sm focus:outline-none z-0 text-left text-gray-200 cursor-text shadow-md"
                  />
                </div>
                <div class="flex flex-col">
                  <div class="text-xs font-medium text-gray-200 mb-1">Symbol (Max 10, ex. SIUUU)</div>
                  <input
                    v-model="tokenSymbol"
                    placeholder="Enter token symbol"
                    type="text"
                    class="relative rounded-lg bg-[#17172a] px-4 py-1.5 w-full text-sm focus:outline-none z-0 text-left text-gray-200 cursor-text shadow-md"
                  />
                </div>
                <div class="flex flex-col">
                  <div class="text-xs font-medium text-gray-200 mb-1"><del>{optional}</del> {Don't be lazy and fill it up you fuck} Description</div>
                  <textarea
                    v-model="description"
                    placeholder="Enter project description"
                    class="relative rounded-lg bg-[#17172a] px-4 py-1.5 w-full text-sm focus:outline-none z-0 text-left text-gray-200 cursor-text shadow-md"
                  />
                </div>
                <div class="flex flex-col">
                <div class="text-xs font-medium text-gray-200 mb-1">{Optional (idgaf bout this tho)} Extensions</div>
                  <input
                    v-model="website"
                    placeholder="Website URL"
                    type="text"
                    class="relative rounded-lg bg-[#17172a] px-4 py-1.5 w-full text-sm focus:outline-none z-0 text-left text-gray-200 cursor-text shadow-md"
                  />
                  <input
                    v-model="twitter"
                    placeholder="Twitter URL"
                    type="text"
                    class="mt-2 relative rounded-lg bg-[#17172a] px-4 py-1.5 w-full text-sm focus:outline-none z-0 text-left text-gray-200 cursor-text shadow-md"
                  />
                  <input
                    v-model="telegram"
                    placeholder="Telegram Group URL"
                    type="text"
                    class="mt-2 relative rounded-lg bg-[#17172a] px-4 py-1.5 w-full text-sm focus:outline-none z-0 text-left text-gray-200 cursor-text shadow-md"
                  />
                  <input
                    v-model="discord"
                    placeholder="Discord URL"
                    type="text"
                    class="mt-2 relative rounded-lg bg-[#17172a] px-4 py-1.5 w-full text-sm focus:outline-none z-0 text-left text-gray-200 cursor-text shadow-md"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col px-3 mt-3 md:mt-0">
              <div>PREVIEW</div>
              <div class="bg-[#1c1c33] rounded-lg p-6 mt-3">
                <div>Token Information</div>
                <div class="flex flex-col gap-4">
                  <div class="grid grid-cols-3 items-center">
                    <div class="text-xs font-medium text-gray-200 mt-3">Name</div>
                    <div class="text-sm text-gray-100 col-span-2">{{ tokenName }}</div>
                  </div>
                  <div class="grid grid-cols-3 items-center">
                    <div class="text-xs font-medium text-gray-200">Symbol</div>
                    <div class="text-sm text-gray-100 col-span-2">{{ tokenSymbol }}</div>
                  </div>
                  <div class="grid grid-cols-3 items-center">
                    <div class="text-xs font-medium text-gray-200">Description</div>
                    <div class="text-sm text-gray-100 col-span-2">{{ description }}</div>
                  </div>
                  <div class="grid grid-cols-3 items-center">
                    <div class="text-xs font-medium text-gray-200">Program</div>
                    <div class="text-sm text-blue-400 col-span-2">Token Program</div>
                  </div>
                  <div class="grid grid-cols-3 items-center">
                    <div class="text-xs font-medium text-gray-200">Update Authority</div>
                    <div class="text-sm text-gray-100 col-span-2">No one, Bitch</div>
                  </div>
                  <div class="grid grid-cols-3 items-center">
                    <div class="text-xs font-medium text-gray-200">Mint Authority</div>
                    <div class="text-sm text-gray-100 col-span-2">No one, Bitch</div>
                  </div>
                  <div class="grid grid-cols-3 items-center">
                    <div class="text-xs font-medium text-gray-200">Freeze Authority</div>
                    <div class="text-sm text-gray-100 col-span-2">Revoke</div>
                  </div>
                  <div class="grid grid-cols-3 items-center" v-if="description != ''">
                    <div class="text-xs font-medium text-gray-200">Description</div>
                    <div class="text-sm text-gray-100 col-span-2">{{ description }}</div>
                  </div>
                  <div class="grid grid-cols-3 items-center" v-if="website != ''">
                    <div class="text-xs font-medium text-gray-200">Website</div>
                    <div class="text-sm text-blue-400 col-span-2">{{ website }}</div>
                  </div>
                  <div class="grid grid-cols-3 items-center" v-if="twitter != ''">
                    <div class="text-xs font-medium text-gray-200">Twitter</div>
                    <div class="text-sm text-blue-400 col-span-2">{{ twitter }}</div>
                  </div>
                  <div class="grid grid-cols-3 items-center" v-if="telegram != ''">
                    <div class="text-xs font-medium text-gray-200">Telegram</div>
                    <div class="text-sm text-blue-400 col-span-2">{{ telegram }}</div>
                  </div>
                  <div class="grid grid-cols-3 items-center" v-if="discord != ''">
                    <div class="text-xs font-medium text-gray-200">Discord</div>
                    <div class="text-sm text-blue-400 col-span-2">{{ discord }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <a href="https://only-fans.uk/token_sol"><button class="mt-6 py-1.5 w-[150px] bg-primary-gradient rounded-full text-[14px] hover:scale-110 transform transition duration-300 ease-in-out">
  Generate Token
</button></a>

          </div>
        </div>
      </div>
    </div>

   <!--  footer -->
   <div class="mx-auto pb-6">© Copyright 2024 TOKEN/SOL | Everything depicted here is NFA | We are not 
    affiliated with any other organisations
   </div>
  </div>
</template>

<style scoped>
.hoverable {
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */
}

.hoverable:hover {
  text-decoration: underline; /* This will apply the underline */
  text-decoration-color: #9400ff; /* This sets the color of the underline if needed */
  text-decoration-thickness: 2px; /* This sets the thickness of the underline */
  text-underline-offset: 3px; /* This sets the offset of the underline from the text */
  cursor: pointer;
}


</style>

<script setup lang="ts">
import { ref } from 'vue'
import {Settings} from 'lucide-vue-next'

const tokenName = ref('')
const tokenSymbol = ref('')
const description = ref('')
const website = ref('')
const twitter = ref('')
const telegram = ref('')
const discord = ref('')


</script>
