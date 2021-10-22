"use strict";

const e = React.createElement;

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

document.body.style.backgroundColor = "#008F11";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#99FF99",
        "#B34D4D",
        "#80B300",
        "#809900",
        "#E6B3B3",
        "#6680B3",
        "#66991A",
        "#FF99E6",
        "#CCFF1A",
        "#FF1A66",
        "#E6331A",
        "#33FFCC",
        "#66994D",
        "#B366CC",
        "#4D8000",
        "#B33300",
        "#CC80CC",
        "#66664D",
        "#991AFF",
        "#E666FF",
        "#4DB3FF",
        "#1AB399",
        "#E666B3",
        "#33991A",
        "#CC9999",
        "#B3B31A",
        "#00E680",
        "#4D8066",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#9900B3",
        "#E64D66",
        "#4DB380",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF",
      ],
      chapters: [
        "سورة البقرة",
        "سورة آل عمران",
        "سورة النساء",
        "سورة المائدة",
        "سورة الأنعام",
        "سورة الأعراف",
        "سورة الأنفال",
        "سورة التوبة",
        "سورة يونس",
        "سورة هود",
        "سورة يوسف",
        "سورة الرعد",
        "سورة إبراهيم",
        "سورة الحجر",
        "سورة النحل",
        "سورة الإسراء",
        "سورة الكهف",
        "سورة مريم",
        "سورة طه",
        "سورة الأنبياء",
        "سورة الحج",
        "سورة المؤمنون",
        "سورة النور",
        "سورة الفرقان",
        "سورة الشعراء",
        "سورة النمل",
        "سورة القصص",
        "سورة العنكبوت",
        "سورة الروم",
        "سورة لقمان",
        "سورة السجدة",
        "سورة الأحزاب",
        "سورة سبأ",
        "سورة فاطر",
        "سورة يس",
        "سورة الصافات",
        "سورة ص",
        "سورة الزمر",
        "سورة غافر",
        "سورة فصلت",
        "سورة الشورى",
        "سورة الزخرف",
        "سورة الدخان",
        "سورة الجاثية",
        "سورة الأحقاف",
        "سورة محمد",
        "سورة الفتح",
        "سورة الحجرات",
        "سورة ق",
        "سورة الذاريات",
        "سورة الطور",
        "سورة النجم",
        "سورة القمر",
        "سورة الرحمن",
        "سورة الواقعة",
        "سورة الحديد",
        "سورة المجادلة",
        "سورة الحشر",
        "سورة الممتحنة",
        "سورة الصف",
        "سورة الجمعة",
        "سورة المنافقون",
        "سورة التغابن",
        "سورة الطلاق",
        "سورة التحريم",
        "سورة الملك",
        "سورة القلم",
        "سورة الحاقة",
        "سورة المعارج",
        "سورة نوح",
        "سورة الجن",
        "سورة المزمل",
        "سورة المدثر",
        "سورة القيامة",
        "سورة الإنسان",
        "سورة المرسلات",
        "نصف الجزء الأول ١",
        "نصف الجزء الأول ٢",
      ],
      text: "",
    };
  }

  async changeBg() {
    const { colors, chapters } = this.state;
    for (let i = 0; i < 50; i++) {
      await delay(i * 5);
      // const color = colors[Math.floor(Math.random() * colors.length)];
      this.setState({
        text: chapters[Math.floor(Math.random() * chapters.length)],
      });
      // document.body.style.backgroundColor = color;
    }
    document.body.style.backgroundColor = "#009F21";
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.text || (
            <button onClick={() => this.changeBg()}>
              <h1>اختر سورة</h1>
            </button>
          )}
        </h1>
      </div>
    );
  }
}

const domContainer = document.querySelector("#App");
ReactDOM.render(e(App), domContainer);
