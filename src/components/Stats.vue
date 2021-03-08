<template>
    <div class="stats">
        <h1>Статистика</h1>
        <div class="stats__table">
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Время</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stat, index) in stats" :key="index">
                        <td>{{stats.length - index}}</td>
                        <td>{{stat}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="setCurrentScene(0)">Главное меню</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'stats'
        ])
    },
    methods: {
        ...mapMutations([
            'setCurrentScene'
        ])
    },
}
</script>

<style lang="scss">
    .stats {
        text-align: center;
        &__table {
            max-height: 400px;
            overflow-y: scroll;
        }
        table {
            width: 100%;
            tr {
                background-color: #ccc;
            }
            td, th {
                border-radius: 10px;
            }
        }
        button{
            font-family: Comic Sans MS, Comic Sans, cursive;
            border-radius: 10px;
            border: none;
            padding: 5px 10px;
            font-size: 15px;
            cursor: pointer;
            margin-top: 10px;
        }
    }
</style>