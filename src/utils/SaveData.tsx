export default function SaveData(data: object) {
  sessionStorage.setItem("DataSettings", JSON.stringify(data));
}
