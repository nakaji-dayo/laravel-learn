<!DOCTYPE html>
<html lang="en">
  <head>
    <title>いけてるTODOアプリ</title>

    <!-- CSSとJavaScript -->
    <link rel="stylesheet" href="/css/app.css">
  </head>

  <body>
    <div class="container">
      <nav class="navbar navbar-default">
        <!-- ナビバーの内容 -->
        <a class="navbar-brand">いけてるTODOアプリ</a>
      </nav>
    </div>

    @yield('content')

    <script src="/js/main.js"></script>
  </body>
</html>
