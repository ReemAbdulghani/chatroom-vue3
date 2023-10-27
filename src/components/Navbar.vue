<template>
    <nav v-if="user">
        <div> 
            <p class="user">Hi {{ user.displayName }}</p>
            <p>Join the disscussions with other doctors about "The 1st Endodontic Conference" event.</p>
        </div>
        <button @click="handleClick">Log Out</button>
    </nav>
</template>
<script>
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';

export default {
    setup() {
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('logged out')
            }
        }
        return { handleClick, user }
    }
}
</script>

<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
nav .user {
    font-weight: bolder;
    font-size: 18px;
    color: #444;
}
nav p {
    margin: 4px auto;
    font-size: 14px;
    color: #999;
}
</style>
