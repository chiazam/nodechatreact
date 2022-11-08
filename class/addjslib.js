exports.addjslib =(urloflib) => {
    const script = document.createElement('script');
    script.src = urloflib;
    script.async = true;
    document.body.appendChild(script);
  };