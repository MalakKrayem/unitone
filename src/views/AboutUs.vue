<template>
  <!-- <div v-for="about in abouts" :key="about.id"> -->
    <div>
    <!-- <h1>{{ about.title }}</h1> -->
    <h1>معلومات عنا</h1>
    <!-- <p>
      {{ about.description }}
    </p> -->
    <p>
      شترط لانعقاد الشركة رضا الشركاء بها. يجب ان يمتد الرضا ليشمل كل بنود العقد
      وهي: عنوان الشركة ومقدار رأس المال الشركة ومقدار حصة كل شريك في رأس المال
      بداية ونهاية السنة المالية أسماء الشركاء وغرض الشركة وكيفية إدارتها ومدتها
      والشكل القانوني. وتكون الشركة باطلة إذا انعدم الرضا سواء بالنسبة لجميع
      الشركاء أو احدهم أو كان مشوبا بعيب من عيوب الإرادة كالغلط والتدليس
      والإكراه، وفي الحالة الأخيرة يكون العقد قابلا للإبطال لمصلحة من شاب العيب
      رضاه والإكراه نادرا ما يقع في عقد كعقد الشركة بعكس التدليس الذي يقع عادة
      في شركة المساهمة والغلط الذي يجيز طلب بطلان العقد هو الغلط الجوهري، أي
      الذي يبلغ حدا من الجسامة بحيث يمتنع معه الشريك عن الدخول في الشركة لو لم
      يقع في هذا الغلط، كما لو دخل شخص شريكاً في شركة اعتقادا منه أنها شركة ذات
      مسؤولية محدودة بينما هي في الواقع شركة تضامن. الأهلية الدخول في الشركة
      تصرف قانوني يجب أن تتوافر لأطرافه الأهلية اللازمة لأبرام عقد الشركة. يختلف
      أنماط الأهلية المطلوبة لاكتساب صفة الشريك في الشركة باختلاف نوع الشركة
      والمركز القانوني للشريك. المبدأ العام هو أنه يمكن لأي شخص بلغ من العمر
      ثمانية عشر عاماً هجرياً ولم يصبه عارض من عوارض الأهلية التي تعدم الأهلية
      كالجنون والعته أو العوارض التي تنقص الأهلية كالسفه والغفلة أن يكون شريكاً
      في شركة. اما إذا كان الشخص ناقص الأهلية كالقاصر المميز أو بلغ سن الرشد
      وكان مصاب بالسفه أو الغفلة فيكون تصرفه المتمثل في دخوله في الشركة قابلاً
      للإبطال لمصلحته على اعتبار أن الدخول في الشركة من التصرفات الدائرة بين
      النفع والضرر. لذلك فهناك رأي يرى أن الأهلية اللازمة لإبرام عقد الشركة هي
      أهلية التصرفات الدائرة بين النفع والضرر لان الشركة من هذا التصرفات. وينسجم
      هذا الرأي مع ما تذهب إليه الشريعة الإسلامية فالشريعة لا تجيز للصبي المميز
      أن يبرم عقد الشركة الا بإذن وليه على اعتبار أن عقد الشركة من قبيل التصرفات
      المالية الدائرة بين النفع والضرر فإن شارك الصبي دون إذن وليه كان العقد
      موقوفاً على إذن وليه. غير أنه يجب ملاحظة أن الشريك المتضامن في شركات
      التضامن وشركتي التوصية بالأسهم والتوصية البسيطة يكتسب صفة التاجر نتيجة
      انضمامه إلى الشركة وعليه فإنه يلزم أن تتوافر فيه أهلية ممارسة التجارة على
      النحو الذي سبق شرحه. وتجدر الإشارة إلى أنه يجوز لولي القاصر أن يستثمر
      أمواله بالاكتتاب في أسهم شركات المساهمة أو التوصية بالأسهم على اعتبار أن
      هذا الاستثمار لا يؤدي إلى اكتساب القاصر صفة التاجر ولا إلى تحمل المسؤولية
      التضامنية والمطلقة عن ديون الشركة إلا في حدود قيمة الأسهم التي يمتلكها.
      المحل المقصود به الغرض (النشاط) الذي يسعى الشركاء إلى تحقيقه. ويجب أن يكون
      محل الشركة محدداً وممكناً ومشروعاً وغير مخالف للنظام العام أو الأداب. لذا
      تكون الشركة باطلة إذا كان غرضها محرماً كالإنجاز بالخمور والمخدرات والرقيق
      أو بيع لحوم الخنزير أو الاتجار بالاعضاء البشرية أو إدارة منزل للدعارة
      والقمار. ويكون محل الشركة غير ممكن إذا كان الغرض منها مباشرة نشاط جائز في
      الأصل لكن النظام يحظره على نوع معين من الشركات. مثاله حظر القيام بأعمال
      التأمين أو الادخار أو البنوك على الشركات ذات مسؤولية محدودة. ولذلك تكون
      الشركة ذات المسؤولية المحدودة باطلة إذا قامت بممارسة أحد هذه الأعمال
      الثلاثة.
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    abouts() {
      return this.$store.getters["abouts"];
    },
  },
  created() {
    this.loadAbout();
  },
  methods: {
    loadAbout() {
      this.$store.dispatch("loadAbout");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 50px;
}
h1 {
  text-align: center;
}
p {
  margin-top: 20px;
  text-align: justify;
}
</style>
