<template>


    <div class="firstpage">
        <h1>{{title}}</h1>
        <p> {{user.p1_first_name + ' ' + user.p1_last_name}}</p>
        <p> {{user.p2_first_name + ' ' + user.p2_last_name}}</p>
    </div>
</template>



<script>

    export default{
        name: 'firstpage',
        data(){
            return{
                title: 'IM531-Project-Part1',
                user: {
                    p1_first_name: 'Malin',
                    p1_last_name: 'Niska',
                    p2_first_name: 'Christoph',
                    p2_last_name: 'Klinar'
                }

            }

        }
    }

</script>

<style scoped>

</style>