
<template>
  <div id="app">
     <div id="item-detail-page" >
    <vx-card v-if="item_data" :key="item_data.objectID">
      <template slot="no-body">
        <div class="item-content">
          <!-- Item Main Info -->
          <div class="product-details p-6 ">
            <div class="vx-row lg:mt-6 ">
              <div class="vx-col flex-none sm:flex-1 lg:flex xl:flex-1 md:flex-auto justify-end ">

                <div class="w-4/12 sm:w-4/12 md:w-full lg:w-5/12 xl:w-5/12 lg:mt-2 lg:mr-24">
                  <img :src="'images/sofa-'+opt_color.substr(1)+'.png'" :alt="item_data.name" class="responsive ">
                </div>

                <div  class="absolute w-4/12 md:w-full lg:w-w-32 xl:w-32
                 lg:mt-38 lg:mr-16 xl:top-auto xl:right-auto
                 lg:top-auto lg:right-auto
                 top-0 right-0 mr-8 mt-32
                ">
                  <img :src="addition_image_1" v-if="addition_image_1" :alt="item_data.name" class="responsive">
                </div>

                <div  class="absolute w-6/12 sm:w-5/12 md:5/12 lg:w-64
                 xl:w-64 xl:mt-40 xl:mr-48 lg:mt-40 lg:mr-48 xl:top-auto
                xl:right-auto lg:top-auto lg:right-auto
                top-0 mt-48 mr-12 md:mr-16
                ">
                 <img :src="addition_image_2" v-if="addition_image_2" :alt="item_data.name" class="responsive">
                </div>


              </div>


              <!-- Item Content -->
              <div class="vx-col md:w-3/5 w-full mt-20 ">
                <h3>{{ item_data.name }}</h3>
                <p class="my-2">
                  <span class="mr-2">by</span>
                  <span>{{ item_data.brand }}</span>
                </p>
                <p class="flex items-center flex-wrap">
                  <span class="text-2xl leading-none font-medium text-primary mr-4 mt-2">${{ newPrice }}</span>
                  <span class="pl-4 mr-2 mt-2 border border-solid d-theme-border-grey-light border-t-0 border-b-0 border-r-0"><star-rating :show-rating="false" :rating="item_data.rating" :star-size="20" read-only /></span>
                  <span class="cursor-pointer leading-none mt-2">424 ratings</span>
                </p>

                <vs-divider />

                <p>{{ item_data.description }}</p>

                <!-- Color -->
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <span class="text-xl font-medium">Color</span>
                    <div class="flex flex-wrap items-center mt-2">
                      <div
                        :class="{'border-transparent': opt_color != color}"
                        class="color-radio rounded-full mx-1 border-2 border-solid cursor-pointer relative"
                        :style="itemColor({color: color, style: ['borderColor']})"
                        v-for="color in available_item_colors"
                        :key="color"
                        @click="opt_color=color">
                          <div class="h-6 w-6 rounded-full absolute" :style="itemColor({color: color, style: ['backgroundColor']})"></div>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="vx-row mt-2">
                  <div class="vx-col w-full">
                    <span class="text-xl font-medium">Addition 1</span>
                    <div class="flex flex-wrap items-center mt-2">
                      <div
                        v-for="(data,index) in available_addition_item_1_images"
                        :key="index"
                        :ref="'addition_image-'+index"
                         :class="{
                            selected: selected && clickedRef === `addition_image-${index}`
                        }"
                        @click="changeAdditionImage1(index,data.image,`addition_image-${index}`)">
                        <vx-tooltip :text="data.desc" position="bottom" delay=".3s">
                        <img :src="'images/'+data.image+'.png'"  :alt="item_data.name" class="w-12">
                        </vx-tooltip>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="vx-row mt-2">
                  <div class="vx-col w-full">
                    <span class="text-xl font-medium">Addition 2</span>
                    <div class="flex flex-wrap items-center mt-2">
                      <div
                        v-for="(data,index) in available_addition_item_2_images"
                        :key="index"
                        :ref="'addition_image2-'+index"
                         :class="{
                            selected: selected && clickedRef === `addition_image2-${index}`
                        }"
                        @click="changeAdditionImage2(index,data.image,`addition_image2-${index}`)">
                         <vx-tooltip :text="data.desc" position="bottom" delay=".3s">
                        <img :src="'images/'+data.image+'.png'"  :alt="item_data.name" class="w-12">
                        </vx-tooltip>

                        </div>
                    </div>
                  </div>
                </div>
                <!-- /Color -->
                <vs-divider />

                <!-- Quantity -->
                <div class="vx-row">

                  <div class="vx-col w-full">
                    <p class="my-2">
                      <span>Available</span>

                      <span class="mx-2">-</span>
                      <span class="text-success">In Stock</span>
                    </p>
                  </div>

                  <div class="vx-col w-full">
                    <div class="flex flex-wrap items-start mb-4">

                      <!-- Add To Cart Button -->
                      <vs-button
                        class="mr-4 mb-4"
                        icon-pack="feather"
                        icon="icon-shopping-cart">
                        ADD TO CART
                      </vs-button>

                    </div>
                  </div>
                </div>
                <!-- /Quantity -->

                <div class="vx-row">
                  <div class="vx-col flex flex-wrap items-center">
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#1551b1" icon="icon-facebook" radius></vs-button>
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#00aaff" icon="icon-twitter" radius></vs-button>
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#c4302b" icon="icon-youtube" radius></vs-button>
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#405DE6" icon="icon-instagram" radius></vs-button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


      </template>
    </vx-card>
  </div>
  </div>
</template>


<script>
import StarRating from 'vue-star-rating'
export default{
  components: {
    StarRating
  },
  data () {
    return {
      item_data: {
          'name'       : 'Modern Sofa - Color Option',
          'brand'      : 'Ogur UYANIK',
          'price'      : 500,
          'image'      : '',
          'rating'     : 5,
          'objectID'   : '45485145'
        },
     addition_image_1: '',
     addition_image_2: '',
      error_occured: false,
      error_msg: '',
      newPrice: 500,
      available_item_colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'], 
      available_addition_item_1_images: [{'image':'w-image-0','desc':'None' + this.noticeFunct(),'price':'0'},{'image':'w-image-1','desc':'White - +50 USD'+this.notice,'price':'50'},{'image':'w-image-2','desc':'+50 USD','price':'50'},{'image':'w-image-3','desc':'+50 USD','price':'50'},{'image':'w-image-4','desc':'+50 USD','price':'50'},{'image':'w-image-5','desc':'+50 USD','price':'50'}],
      available_addition_item_2_images: [{'image':'h-image-0','desc':'None' + this.noticeFunct(),'price':'0'},{'image':'h-image-1','desc':'Black - +50 USD'+this.notice},{'image':'h-image-2','desc':'+50 USD','price':'50'},{'image':'h-image-3','desc':'+50 USD','price':'50'},{'image':'h-image-4','desc':'+50 USD','price':'50'},{'image':'h-image-5','desc':'+50 USD','price':'50'}],
      opt_color: '#7367F0',
      clickedRef: "",
      priceIncreased: true,
      priceDecreased: true,
      selected: false,
      is_hearted: false,
    }
  },
  computed: {
    itemColor () {
      return (obj) => {
        const style_obj = {}
        obj.style.forEach(p => { style_obj[p] = obj.color })
        return style_obj
      }
    },

  },
  methods: {
    changeAdditionImage1(index,image,ref){
      this.selectedItem(ref,1)
      this.clickedAddition(image,'addition_image_1',1)
      this.ifIndexEqual0(index,'addition_image_1')
    },
    changeAdditionImage2(index,image,ref){
        this.selectedItem(ref,2)
        this.clickedAddition(image,'addition_image_2',2)
        this.ifIndexEqual0(index,'addition_image_2')

    },
    clickedAddition(image,thisImage,type){
            this.newPrice = (parseInt(this.item_data.price)) + (50);
            if(type == 2)  this.newPrice = (parseInt(this.newPrice)) + (50);
            this[thisImage]=`images/${image}.png`
    },
    ifIndexEqual0(index,thisImage){
      if(index == '0'){
       this.newPrice = (parseInt(this.item_data.price));
        this[thisImage] = null
      }
    },
    selectedItem (ref,type) {
        let $ref = this.$refs[ref][0];
         this.selected = true;
         this.clickedRef = ref;
         $ref.classList.add("selected");
    },
    noticeFunct () {
      return ' The Colors simply painted with photoshop. Dont caring the colors. ';
    }
  },
  watch:{
        priceIncreased : function(val){
          console.log(val,this.item_data.price)
          console.log(this.item_data.price == 229)
          if(val === false && this.item_data.price == 229) this.priceIncreased = true
        }
  },
  created () {

  }
}
</script>

<style lang="scss">

@import "@/assets/scss/vuexy/_variables.scss";

#item-detail-page {
  .color-radio {
    height: 2.28rem;
    width: 2.28rem;

    > div {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .selected {
    border: 2px solid #5c9dd9;
    margin: 0;
}


  .item-features {
    background-color: #f7f7f7;

    .theme-dark & {
      background-color: $theme-dark-secondary-bg;
    }
  }

  .product-sales-meta-list {
    .vs-list--icon {
      padding-left: 0;
    }
  }

 
}
</style>
