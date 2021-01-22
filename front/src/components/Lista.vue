<template>
  <div class="welcome">
    <div class="button_add">
      <button class="button_editar" @click="insertProduct()">NOVO</button>
    </div>
    <b-table :data="produtos || []">
      <template v-slot="props">
        <b-table-column field="id" label="ID" width="40" numeric >
            {{ props.row.id }}
        </b-table-column>
        <b-table-column field="nome" label="nome">
            {{ props.row.nome }}
        </b-table-column>
        <b-table-column field="custo" label="custo">
            {{ props.row.custo }}
        </b-table-column>
        <b-table-column field="preco" label="preco">
            {{ props.row.preco }}
        </b-table-column>
        <b-table-column field="quantidade" label="quantidade">
            {{ props.row.quantidade }}
        </b-table-column>
        <b-table-column label="Ação">
          <button class="button_editar" @click="editar(props.row)">Editar</button>
          <button class="button_excluir" @click="deletar(props.row.id)">Excluir</button>
        </b-table-column>

      </template>
    </b-table>
    <b-modal :active.sync="isImageModalActive" :width="500" aria-role="dialog" :can-cancel="false">
        <div class="modalBox">
            <b-field label="Descrição">
                <b-input v-model="edit.nome"></b-input>
            </b-field>
            <b-field label="Preço">
                <b-input v-model="edit.preco"></b-input>
            </b-field>
            <b-field label="Custo">
                <b-input v-model="edit.custo"></b-input>
            </b-field>
            <b-field label="Quantidade">
                <b-input v-model="edit.quantidade"></b-input>
            </b-field>
            <b-button class="button_editar" @click="clear()">CANCELAR</b-button>  
            <b-button class="button_excluir" @click="save()">SALVAR</b-button>  
        </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'home',
  data() {
    return {
      isImageModalActive: false,
      edit:{
        nome:'a',
        preco: 1,
        custo:2,
        quantidade:3
      }
    }
  },
  props: {
  },
  methods:{
    deletar(id){
      const res = this.$store.dispatch('produtos/del', id)
      if(res){
        this.clear()
      }
    },
    save(){
      const actionPath = this.edit.id ? "produtos/update" : "produtos/add";
      const res = this.$store.dispatch(actionPath, this.edit)
      if (res) {
        this.clear()
      }
    },
    insertProduct(){
      this.isImageModalActive = true
    },
    clear(){
      this.edit = {
        nome:'',
        preco:'',
        custo:'',
        quantidade:''
      }
      const self = this
      this.isImageModalActive= false
      setTimeout(function(){
        self.fetch()
      },500)
    },
    editar(x){
      this.edit = Object.assign(this.edit,x)
      this.isImageModalActive = true;
    },
    async fetch(){
      const load = this.$buefy.loading.open()
      const res = await this.$store.dispatch("produtos/fetch");
      if(!res){
        console.log('erro de conexao');
      }
      load.close()
    }
  },
  mounted(){
    this.fetch()
  },
  computed:{
    ...mapGetters({
      produtos: "produtos/data",
    })
  }
};
</script>
<style scoped>

.button_add{
  text-align: right;
  margin-bottom: 10px;
}


.modalBox{
  padding: 20px;
  background: #999;
  border-radius: 5px;
}
  .welcome{
    background: #0e1726;
    margin: 50px auto;
    color: #eee;
    text-align: center;
    border-radius: 5px;
    width: 70%;
    padding: 30px;
  }
  h1{
    font-size: 30px;
  }
  h2{
    font-size: 22px;
  }

  .button_excluir, .button_editar{
    margin-right: 10px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    border:solid #eee 1px;
    cursor: pointer;
  }

  .button_excluir:hover, .button_editar:hover{
    opacity: 0.8;
    border:solid #000 1px;
  }



  .button_editar{
    background: #4456d8;
  }

  .button_excluir{
    background: #d62424;
  }
</style>