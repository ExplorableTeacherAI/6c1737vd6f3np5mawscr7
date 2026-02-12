import { Block } from "@/components/templates";
import { EditableH1, EditableH2, EditableParagraph, InlineScrubbleNumber, Equation } from "@/components/atoms";
import { FullWidthLayout } from "@/components/layouts";
import { useVar } from "@/stores";
import { Mafs, Coordinates, Plot, Point, Circle, Line, Text } from "mafs";

/**
 * Unit Circle Sine Wave Visualization
 * Shows the connection between a point on the unit circle and the sine wave
 */
const UnitCircleSineViz = () => {
    const angle = useVar("sineAngle", 45) as number;
    const angleRad = (angle * Math.PI) / 180;

    // Point on unit circle
    const cx = Math.cos(angleRad);
    const cy = Math.sin(angleRad);

    return (
        <div className="w-full overflow-hidden rounded-xl">
            <Mafs
                height={380}
                viewBox={{ x: [-1.8, 8], y: [-1.8, 1.8] }}
                preserveAspectRatio={false}
            >
                <Coordinates.Cartesian
                    xAxis={{ lines: 1, labels: (x) => (x === 0 ? "" : `${x}`) }}
                    yAxis={{ lines: 1, labels: (y) => (y === 0 ? "" : `${y}`) }}
                />

                {/* Unit circle */}
                <Circle
                    center={[0, 0]}
                    radius={1}
                    color="#94a3b8"
                    fillOpacity={0.03}
                    strokeStyle="solid"
                    weight={1.5}
                />

                {/* Radius line to point */}
                <Line.Segment
                    point1={[0, 0]}
                    point2={[cx, cy]}
                    color="#6366f1"
                    weight={2}
                />

                {/* Vertical projection line (sine value) */}
                <Line.Segment
                    point1={[cx, 0]}
                    point2={[cx, cy]}
                    color="#ef4444"
                    weight={2.5}
                    style="dashed"
                />

                {/* Horizontal projection line */}
                <Line.Segment
                    point1={[0, 0]}
                    point2={[cx, 0]}
                    color="#94a3b8"
                    weight={1}
                    style="dashed"
                />

                {/* Point on circle */}
                <Point x={cx} y={cy} color="#6366f1" />

                {/* Sine label */}
                <Text
                    x={cx + 0.15}
                    y={cy / 2}
                    color="#ef4444"
                    size={14}
                >
                    sin θ
                </Text>

                {/* Connection line from circle point to wave */}
                <Line.Segment
                    point1={[cx, cy]}
                    point2={[1.5, cy]}
                    color="#ef4444"
                    weight={1}
                    style="dashed"
                    opacity={0.4}
                />

                {/* Sine wave curve */}
                <Plot.OfX
                    y={(x) => Math.sin(x)}
                    color="#3b82f6"
                    weight={2.5}
                    domain={[1.5, 8]}
                />

                {/* Moving point on the sine wave that corresponds to the angle */}
                <Point
                    x={angleRad + 1.5}
                    y={Math.sin(angleRad)}
                    color="#ef4444"
                />

                {/* Vertical line at angle position on wave */}
                <Line.Segment
                    point1={[angleRad + 1.5, 0]}
                    point2={[angleRad + 1.5, Math.sin(angleRad)]}
                    color="#ef4444"
                    weight={1.5}
                    style="dashed"
                    opacity={0.5}
                />
            </Mafs>
        </div>
    );
};

/**
 * Section 1: What is a Sine Wave?
 * Introduction with interactive angle and unit circle visualization
 */

export const sineWaveIntroTitle = (
    <FullWidthLayout key="layout-sine-title" maxWidth="xl">
        <Block id="block-sine-title" padding="lg">
            <EditableH1 id="h1-sine-title" blockId="block-sine-title">
                Sine Waves
            </EditableH1>
        </Block>
    </FullWidthLayout>
);

export const sineWaveIntroParagraph = (
    <FullWidthLayout key="layout-sine-intro-para" maxWidth="xl">
        <Block id="block-sine-intro-para" padding="sm">
            <EditableParagraph id="para-sine-intro" blockId="block-sine-intro-para">
                The sine wave is one of the most fundamental shapes in all of
                mathematics. It describes everything from the vibration of a guitar
                string to the way light travels through space. But where does this
                graceful curve actually come from?
            </EditableParagraph>
        </Block>
    </FullWidthLayout>
);

export const sineWaveCircleExplanation = (
    <FullWidthLayout key="layout-sine-circle-explain" maxWidth="xl">
        <Block id="block-sine-circle-explain" padding="sm">
            <EditableH2 id="h2-circle-connection" blockId="block-sine-circle-explain">
                From Circle to Wave
            </EditableH2>
            <EditableParagraph id="para-circle-connection" blockId="block-sine-circle-explain">
                Imagine a point moving around a circle. As it moves, its{" "}
                <strong>height above the center</strong> traces out the sine wave.
                Try changing the angle to{" "}
                <InlineScrubbleNumber
                    varName="sineAngle"
                    defaultValue={45}
                    min={0}
                    max={360}
                    step={5}
                    formatValue={(v) => `${v}°`}
                />{" "}
                and watch how the point on the circle connects to the wave on the right.
                The red dashed line shows the <strong>sine value</strong> — the
                height of the point.
            </EditableParagraph>
        </Block>
    </FullWidthLayout>
);

export const sineWaveVisualization = (
    <FullWidthLayout key="layout-sine-viz" maxWidth="xl">
        <Block id="block-sine-viz" padding="sm">
            <UnitCircleSineViz />
        </Block>
    </FullWidthLayout>
);

export const sineWaveEquation = (
    <FullWidthLayout key="layout-sine-equation" maxWidth="xl">
        <Block id="block-sine-equation" padding="sm">
            <EditableParagraph id="para-sine-equation" blockId="block-sine-equation">
                Mathematically, for any angle <Equation latex="\theta" />, the
                sine function gives us the vertical coordinate of the point on the
                unit circle:{" "}
                <Equation
                    latex="y = \sin(\theta)"
                    className="text-lg"
                />
                . This simple relationship is the foundation of all wave
                phenomena.
            </EditableParagraph>
        </Block>
    </FullWidthLayout>
);
