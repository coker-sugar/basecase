for (var i = 0; i <= 100; i++) {
    var dialog = document.getElementsByTagName("dialog")[0],

        openDialog = document.getElementsByClassName("open")[i],//改一
        closeDialog = document.getElementsByClassName("close")[i];//改二

    openDialog.onclick = function () {
        dialog.showModal();// 或者show(),这是有区别的
    }
    closeDialog.onclick = function () {
        dialog.close();
    }
}

