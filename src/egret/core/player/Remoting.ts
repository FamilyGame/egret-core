//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

/**
 * @internal
 */
namespace egret.sys {

    /**
     * @internal
     */
    export const enum NodeType {
        Node,
        Stage,
        BITMAP,
        GRAPHICS,
        TEXT
    }

    /**
     * @internal
     */
    export const enum DisplayObjectBits {
        DirtyMatrix = 1 << 0,
        DirtyScrollRect = 1 << 1,
        DirtyFilters = 1 << 2,
        DirtyVisible = 1 << 3,
        DirtyCacheAsBitmap = 1 << 4,
        DirtyAlpha = 1 << 5,
        DirtyBlendMode = 1 << 6,
        DirtyMask = 1 << 7,
        DirtyMaskRect = 1 << 8
    }

    /**
     * @internal
     */
    export const enum StageBits {
        DirtyColor = 1 << 0,
        DirtyDisplayRule = 1 << 1,
        DirtyFrameRate = 1 << 2
    }

    /**
     * @internal
     */
    export const enum BitmapBits {
        DirtyBitmapData = 1 << 0,
        DirtyScale9Grid = 1 << 1,
        DirtySmoothing = 1 << 2,
        DirtyFillMode = 1 << 3
    }

    export const enum TextFieldBits {
        DirtyType = 1 << 0,
        DirtyFontFamily = 1 << 1,
        DirtySize = 1 << 2,
        DirtyBold = 1 << 3,
        DirtyItalic = 1 << 4,
        DirtyTextAlign = 1 << 5,
        DirtyVerticalAlign = 1 << 6,
        DirtyLineSpacing = 1 << 7,
        DirtyTextColor = 1 << 8,
        DirtyWordWrap = 1 << 9,
        DirtyStroke = 1 << 10,
        DirtyStrokeColor = 1 << 11,
        DirtyBorder = 1 << 12,
        DirtyBorderColor = 1 << 13,
        DirtyBackground = 1 << 14,
        DirtyBackgroundColor = 1 << 15,
        DirtyText = 1 << 16,
        DirtyDisplayAsPassword = 1 << 17,
        DirtyMaxChars = 1 << 18,
        DirtyMultiline = 1 << 19,
        DirtyPattern = 1 << 20,
        DirtySoftKeyboardType = 1 << 21
    }

    /**
     * @internal
     */
    export const enum GraphicsCommand {
        BEGIN_FILL = 1,
        BEGIN_GRADIENT_FILL = 2,
        CLEAR = 3,
        CUBIC_CURVE_TO = 4,
        CURVE_TO = 5,
        DRAW_ARC = 6,
        DRAW_CIRCLE = 7,
        DRAW_ELLIPSE = 8,
        DRAW_RECT = 9,
        DRAW_ROUND_RECT = 10,
        END_FILL = 11,
        LINE_STYLE = 12,
        LINE_TO = 13,
        MOVE_TO = 14
    }

    /**
     * @internal
     */
    export const enum MessageTag {
        EndOfFile = 0,
        UpdateDisplayObject = 10,
        UpdateChildren = 11,
        UpdateStage = 12,
        UpdateBitmap = 13,
        UpdateGraphics = 14,
        UpdateTextField = 15,
        DrawToBitmap = 20
    }

    /**
     * @internal
     * Dictates how matrices are encoded.
     */
    export const enum MatrixEncoding {
        TranslationOnly,
        UniformScaleAndTranslationOnly,
        ScaleAndTranslationOnly,
        All
    }

    /**
     * @private
     */
    function createEnumMap(list:string[]):sys.Map<number> {
        let map:sys.Map<number> = {};
        let length = list.length;
        for (let i = 0; i < length; i++) {
            map[list[i]] = i;
        }
        return map;
    }

    /**
     * @internal
     */
    export const blendModeMap = createEnumMap([
        "normal", "layer", "add", "erase", "darken", "difference", "hardlight", "lighten", "multiply", "overlay",
        "screen", "colordodge", "colorburn", "softlight", "exclusion", "hue", "saturation", "color", "luminosity"
    ]);

    /**
     * @internal
     */
    export const bitmapFillModeMap = createEnumMap([
        "scale", "repeat", "clip"
    ]);

    /**
     * @internal
     */
    export const gradientTypeMap = createEnumMap([
        "linear", "radial"
    ]);

    /**
     * @internal
     */
    export const lineScaleModeMap = createEnumMap([
        "normal", "none", "horizontal", "vertical"
    ]);

    /**
     * @internal
     */
    export const capsStyleMap = createEnumMap([
        "round", "square", "none"
    ]);

    /**
     * @internal
     */
    export const jointStyleMap = createEnumMap([
        "round", "bevel", "miter"
    ]);

    /**
     * @internal
     */
    export const textFieldTypeMap = createEnumMap([
        "dynamic", "input"
    ]);

    /**
     * @internal
     */
    export const horizontalAlignMap = createEnumMap([
        "left", "right", "center"
    ]);

    /**
     * @internal
     */
    export const verticalAlignMap = createEnumMap([
        "top", "bottom", "middle"
    ]);

    /**
     * @internal
     */
    export const softKeyboardTypeMap = createEnumMap([
        "default", "contact", "email", "number", "punctuation", "url"
    ]);

}