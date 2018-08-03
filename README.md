# jQuery Ajax Extends

[CRUD](https://ko.wikipedia.org/wiki/CRUD)를 처리하는 jQuery Ajax 유틸리티 메서드를 확장하는 유틸리티 묶음 파일입니다.

## 확장 메서드

### PUT

```ts
$.put(
  api_with_id : string,
  put_data    : {},
  success?    : (data, status) => void,
  fail?       : (error) => void
);
```

### PATCH

```ts
$.patch(
  api_with_id : string,
  patch_data  : {},
  success?    : (data, status) => void,
  fail?       : (error) => void
);
```

### DELETE

```ts
$.patch(
  api_with_id : string,
  success?    : (data, status) => void,
  fail?       : (error) => void
);
```

### JSONP

```ts
$.jsonp(
  api         : string,
  success?    : (data, status) => void,
  fail?       : (error) => void
);
```

## 사용법

jQuery 라이브러리를 로드하는 코드 아래에 Ajax Extends 코드를 호출합니다.

```html
<!-- jQuery 라이브러리 로드 -->
<script src="https://unpkg.com/jquery"></script>
<!-- jQuery Ajax Extends 파일 로드 -->
<script src="jquery.ajax.extends.js"></script>
```

### CDN

코드 다운로드 없이 CDN 주소를 사용할 수도 있습니다.

#### URL

- https://cdn.rawgit.com/yamoo9/jquery-ajax-extends/master/src/jquery.ajax.extends.js
- https://cdn.rawgit.com/yamoo9/jquery-ajax-extends/master/src/jquery.ajax.extends.min.js

#### 단축 URL

- https://goo.gl/5YzsM4
- https://goo.gl/uRbGbB
