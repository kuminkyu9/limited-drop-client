// 빌드 시 자동으로 true/false 결정됨
const isProd = import.meta.env.PROD; 

export const BASE_URL = isProd 
  ? 'https://food-manager.shop'          // 운영 서버 주소
  : 'http://localhost:3000';             // 개발 로컬 주소
