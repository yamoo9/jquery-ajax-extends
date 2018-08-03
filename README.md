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

