export const today = (() => {
  const now = new Date();
  const hour = now.getHours();

  // 오전 5시~11시 사이면 하루 전 날짜로 설정
  if (hour >= 5 && hour < 11) {
    now.setDate(now.getDate() - 1);
  }

  return now.toISOString().split("T")[0].replace(/-/g, "");
})();
