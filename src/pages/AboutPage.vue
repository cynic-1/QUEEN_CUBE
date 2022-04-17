<template>
  <HeaderImage :header-label="title" :sub-header-label="slogan" :is-center="true"/>
  <q-card class="company-des">{{description}}</q-card>
  <div class="gt-xs time-line-block">
    <ul class="timeline" id="timeline">
      <template v-for="item of timelines">
        <li class="li complete">
          <div class="timestamp">
            <span class="date">{{item.year}}</span>
          </div>
          <div class="status">
            {{item.event}}
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";

export default {
  name: "AboutPage",
  components: {
    HeaderImage
  },
  data() {
    return {
      headerImg: "",
      title: "标题",
      slogan: "SloganSloganSloganSloganSloganSloganSloganSloganSloganSlogan",
      description: "公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍\n" +
        "公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍\n" +
        "\n" +
        "公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍\n" +
        "公司介绍公司介绍公司介绍公司介绍\n" +
        "\n" +
        "公司介绍公司介绍公司介绍",
      timelines: [
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.company-des
  margin: -60px auto 30px auto
  display: flex
  justify-content: center
  padding: 50px 72px
  width: 80vw
.time-line-block
  width: 80vw
  margin: 0 auto 0 auto
.timeline
  list-style-type: none
  display: flex
  align-items: center
  justify-content: center
.li
  transition: all 200ms ease-in

.timestamp
  margin-bottom: 20px
  padding: 0 40px
  display: flex
  flex-direction: column
  align-items: center
  font-weight: 100
.status
  padding: 15px
  display: flex
  justify-content: center
  border-top: 2px solid #D6DCE0
  position: relative
  transition: all 200ms ease-in
  h4
    font-weight: 600
  &:before
    content: ''
    width: 25px
    height: 25px
    background-color: white
    border-radius: 25px
    border: 1px solid #ddd
    position: absolute
    top: -15px
    left: 42%
    transition: all 200ms ease-in
.li.complete
  .status
    border-top: 2px solid #66DC71
    &:before
      background-color: #66DC71
      border: none
      transition: all 200ms ease-in
    h4
      color: #66DC71

@media (min-device-width: 320px) and (max-device-width: 700px)
  .timeline
    list-style-type: none
    display: block
  .li
    transition: all 200ms ease-in
    display: flex
    width: inherit
  .timestamp
    width: 100px
  .status
    &:before
      left: -8%
      top: 30%
      transition: all 200ms ease-in

</style>
