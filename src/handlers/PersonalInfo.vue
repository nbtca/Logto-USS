<script setup>
import {CardDescription, CardTitle} from '@/components/ui/card/index.js'
import EditBirthdayDialog from '@/components/Pages/PersonalInfo/EditBirthdayDialog.vue'
import EditUsername from '@/components/Pages/PersonalInfo/EditUsername.vue'
import EditRegionalSettings from '@/components/Pages/PersonalInfo/EditRegionalSettings.vue'
import EditLocaleSettings from '@/components/Pages/PersonalInfo/EditLocaleSettings.vue'
import EditFullName from '@/components/Pages/PersonalInfo/EditFullName.vue'
import {CircleUserRound} from "lucide-vue-next";
</script>

<template>
  <div class="w-screen desktop:w-[600px] phone:px-4 tablet:px-32 ">
    <CardTitle class="my-4 flex">
      <CircleUserRound class="mr-1" />
      Personal Information
    </CardTitle>
    <CardDescription>
      Manage your personal information, including phone numbers and email addresses where you can
      be reached.
    </CardDescription>
    <div class="desktop:flex space-y-4 desktop:space-y-0 desktop:gap-4 mt-12">
      <EditUsername />
    </div>
    <div class="desktop:flex space-y-4 desktop:space-y-0 desktop:gap-4 mt-4">
      <EditFullName />
      <EditBirthdayDialog />
    </div>
    <div class="desktop:flex space-y-4 desktop:space-y-0 desktop:gap-4 mt-4">
      <EditRegionalSettings />
      <EditLocaleSettings />
    </div>
  </div>
</template>

<style scoped></style>
