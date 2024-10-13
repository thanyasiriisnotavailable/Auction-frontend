<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import { ref } from 'vue';
const email = ref('')
const password = ref('')
</script>
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 1g :px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="x-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <InputText type="email" v-model="email" placeholder="Email address" />
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover: text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <InputText type="pasword" v-model="password" placeholder="password"/>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Signin
          </button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover: text-indigo-500"
          >Try to register here</a
        >
      </p>
    </div>
  </div>
</template>
