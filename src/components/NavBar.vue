<template>
    <section v-if="user"
        class="navbar p-4 rounded-top-5 border-0 border-bottom bg-white d-flex justify-content-between align-items-center">
        <!-- User Info -->
        <div class="d-flex gap-3">
            <img :src="user?.photoURL || require('@/assets/images/default.png')" alt="" width=" 50"
                class="img-fluid rounded-circle">
            <div class="d-flex flex-column">
                <span>Hi there, {{ user.displayName ? user.displayName : defaultName }}!</span>
                <span class="fw-bold">Logged in as {{ user.email }}</span>
            </div>
        </div>
        <!-- Logout button -->
        <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#logOutModal"
                class="btn btn-primary rounded-5 px-3 py-2">Logout</button>
        </div>
    </section>
    <!-- modal -->
    <div class="modal fade" id="logOutModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-primary fw-bold fs-3" id="exampleModalLabel">Ready to Leave?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to log out of <strong class="text-primary">Ch</strong><strong
                            class="text-secondary">a</strong><strong class="text-primary">tty</strong>?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="signOut"
                        data-bs-dismiss="modal">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import getUser from '@/composables/getUser';
import useSignOUt from '@/composables/useSignOut';

const { user } = getUser()
const { error, logOut } = useSignOUt()

const defaultName = 'chattie'

const signOut = async () => {
    await logOut()
}
</script>

<style></style>