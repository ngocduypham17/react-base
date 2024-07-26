import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

// Sentry.init({
//   dsn: 'YOUR_SENTRY_DSN',
//   integrations: [
//     new BrowserTracing({
//       // Truyền các tùy chọn cấu hình nếu cần
//       tracingOrigins: ['localhost', 'https://yourserver.io/api'],
//       // ...các tùy chọn khác
//     }),
//   ],
//   tracesSampleRate: 1.0, // Điều chỉnh tỷ lệ mẫu theo nhu cầu của bạn
// });
