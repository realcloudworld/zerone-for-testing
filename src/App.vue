<template>
    <div id="app" style="height: 100%">
        <v-app style="height: 100%">
            <div style="height: 100%; background: #e0e0e0">
                <router-view />
            </div>
        </v-app>
    </div>
</template>
<script>
export default {
    created() {
        this.$vuetify.rtl = true;
    },
};
</script>

<style lang="scss">
.v-application--wrap {
    min-height: unset;
}
//@import "App.css";
@import "style.css";
</style>
