<template>
  <b-modal id="status-modal" :title="title">
    <p v-if="success" class="my-4 d-flex justify-content-center align-items-center">
				<span class="icon green"><faicon icon="check-circle" /></span>
				Success!
			</p>
    <p v-else class="my-4">Sorry!</p>
  </b-modal>
</template>

<script>
export default {
	name: "modal",
	props:["success"],
	computed:{
		title(){
			if(this.success){
				return "Congrats!"
			}else{
				return "Sorry!"
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.icon{
	font-size:40px;
	margin-right: 15px;
}
.green{
	color: #4caf50;
}
</style>