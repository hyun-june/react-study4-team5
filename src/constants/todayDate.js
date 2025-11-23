export const today = (() => {
  const now = new Date();
  const hour = now.getHours();

  // 오전 5시~11시 사이면 하루 전 날짜로 설정
  if (hour >= 5 && hour < 11) {
    now.setDate(now.getDate() - 1);
  }

  // 주말이면 금요일로 조정
  const dayOfWeek = now.getDay(); // 0: 일요일, 6: 토요일

  if (dayOfWeek === 0) {
    // 일요일이면 2일 전 (금요일)
    now.setDate(now.getDate() - 2);
  } else if (dayOfWeek === 6) {
    // 토요일이면 1일 전 (금요일)
    now.setDate(now.getDate() - 1);
  }

  return now.toISOString().split("T")[0].replace(/-/g, "");
})();
