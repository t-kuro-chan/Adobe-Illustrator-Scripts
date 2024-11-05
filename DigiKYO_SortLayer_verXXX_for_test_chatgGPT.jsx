function main() {
    var doc = app.activeDocument;
    var targetLayerName = "XXXXX";

    // ステップ 1: レイヤー名「XXXXX」を探す
    var targetLayer;
    try {
        targetLayer = doc.layers.getByName(targetLayerName);
    } catch (e) {
        // レイヤーが見つからない場合は終了
        return;
    }

    // ステップ 2: 「XXXXX」レイヤーが非表示・ロックされている場合は表示・ロック解除
    if (targetLayer.visible === false) {
        targetLayer.visible = true; // レイヤーを表示
    }
    if (targetLayer.locked === true) {
        targetLayer.locked = false; // ロックを解除
    }
    
    // アクティブレイヤーとして設定
    doc.activeLayer = targetLayer;
}

main();
