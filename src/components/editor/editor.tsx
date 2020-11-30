import React, { useState, useEffect } from "react";
import "./editor.css";

import PropertiesPanel from "../properties-panel/properties-panel";
import Preview from "../preview/preview";
import { useSelector, useDispatch } from "react-redux";
import { addImage, deleteImage } from "../../store/image/actions";
import { deleteText } from "../../store/text/actions";
import { ApplicationState } from "../../store/";
import Modal from "../UI/modal/modal";
import HTMLLayout from "../html-layout/html-layout";
import ClipboardPopup from "../clipboard-popup/clipboard-popup";

const Editor: React.FC = () => {
  const [isCopyingToHtml, setIsCopyingToHtml] = useState(false);
  const [clipboardPopup, setClipboardPopup] = useState('');
  const bannerStore = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if(clipboardPopup) {
      setTimeout(() => setClipboardPopup(''), 1500);
    }
  }, [clipboardPopup])

  const deleteFromBannerHandler = (type: string): void => {
    switch (type) {
      case "image":
        dispatch(deleteImage());
        break;
      case "text":
        dispatch(deleteText());
        break;
    }
  };

  const clipboardSuccessHandler = (type: string) => {
    setIsCopyingToHtml(false)
    setClipboardPopup(type)
  }

  const fileChangeHandler = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    const target = event.target as HTMLInputElement;
    const path = target.value;
    dispatch(addImage(path));
  };

  const copyJSONHandler = (): void => {
    const jsonConfig = {
      bannerWidth: bannerStore.banner.width,
      bannerHeight: bannerStore.banner.height,
      background: bannerStore.banner.backgroundColor,
      imageLink: bannerStore.image.imagePreview,
      text: bannerStore.text.value,
      fontSize: bannerStore.text.fontSize,
    };
    navigator.clipboard.writeText(JSON.stringify(jsonConfig)).then(() => setClipboardPopup('success'))
    .catch(err => {
      setClipboardPopup('error')
    });
  };

  return (
    <div className="editor">
      <ClipboardPopup type={clipboardPopup}/>
      <Modal show={isCopyingToHtml} canceled={() => setIsCopyingToHtml(false)}>
        <HTMLLayout discard={clipboardSuccessHandler} />
      </Modal>
      <PropertiesPanel
        fileChangeHandler={fileChangeHandler}
        copyJSONHandler={copyJSONHandler}
        showHTMLPopup={() => setIsCopyingToHtml(true)}
      />
      <Preview
        imagePreview={bannerStore.image.imagePreview}
        isText={bannerStore.text.isText}
        deleteHandler={deleteFromBannerHandler}
      />
    </div>
  );
};

export default Editor;
