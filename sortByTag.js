const sortByTag = {
    data() {
        return {
            articleArr: [
                {id: 1, tag: "Kitchen", URL: "img/blog_item_1.jpg", title: "Let’s Get Solution for Building Construction Work", date: "26 December,2022", content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."},
                {id: 2, tag: "Bedroom", URL: "img/blog_item_1.jpg", title: "Design sprints are great", date: "26 December,2022", content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."},
                {id: 3, tag: "Building", URL: "img/blog_item_1.jpg", title: "Let’s Get Solution for Building Construction Work", date: "26 December,2022", content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."},
            ],
        }
    },

    methods: {
        sort() {

        }
    },

    template: `
    <div>
    <div v-for="(article) in articleArr" :key="article.id">
      <h1>{{article.title}}</h1>
      <img :src="article.URL" alt="">
      <div>{{article.date}}</div>
      <p>{{article.content}}</p>
    </div>
    <div class="tags">
      <h2 class="heading">Tags</h2>
      <button @click="sort()">Kitchen</button>
      <button @click="sort()">Bedroom</button>
      <button @click="sort()">Building</button>
      <button @click="sort()">Architecture</button>
      <button @click="sort()">Kitchen Planning</button>
    </div>
    </div>
    `,
}