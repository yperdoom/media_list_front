<script>
import http from '/src/services/api'
export default {
  data() {
    return {
      tamanho: this.list(),
      selected: 0,
      midias: [{
        id: '',
        midia: '',
        concluido: '',
        favorito: '',
        minutos_episodio: '',
        quantidade_episodios: '',
        quantidade_assistidos: '',
        user: '',
        criado_em: '',
        atualizado_em: ''
      }],
    }
  },

  methods: {
    async list() {
      let res
      try {
        res = await http.get('http://localhost:3015/medias')
        this.tamanho = res.data.length
        for (let i = 0; i < this.tamanho; i++) {
          this.midias[i].id = res.data[i]._id
          this.midias[i].midia = res.data[i].name
          this.midias[i].concluido = res.data[i].concluido
          this.midias[i].favorito = res.data[i].favorito
          this.midias[i].minutos_episodio = res.data[i].minutos_episodio
          this.midias[i].quantidade_episodios = res.data[i].quantidade_episodios
          this.midias[i].quantidade_assistidos = res.data[i].quantidade_assistidos
          this.midias[i].user = res.data[i].user
          this.midias[i].criado_em = res.data[i].created_at
          this.midias[i].atualizado_em = res.data[i].updated_at
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>


<template>
  <h2>Multi Select</h2>
  <select v-model="multiSelected" multiple style="width:80%">
    <option> {{ this.midias[0].midia }}
    </option>
  </select>
  <div>
    {{ tamanho }}
  </div>
  <br>
  <button @click="list">List</button>

</template>

<style scoped>
button {
  font-weight: bold;
  margin: 1%;
}

a {
  font-weight: bold;
  color: rgb(255, 255, 255);
}
</style>