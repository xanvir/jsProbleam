const milestonesData = JSON.parse(data).data;

//load course milestones data
function loadMilestones() {
    const milestones = document.querySelector(".milestones");

    milestones.innerHTML = `${milestonesData.map(function (milestone) {
        return `<div class="milestone border-b">
        <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick="openMilestone(this)">
                <p>
                    ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>
        </div>
        <div class="hidden_panel">
            ${milestone.modules.map(function (modules) {
            return `<div class="module border-b">
                <p>${modules.name}</p>
            </div>`
        }).join('')}
        </div>
    </div>`
    }).join('')}`

    function openMilestone(milestoneElement) {
        const currentPanel = milestoneElement.parentNode.nextElementSibling;

        currentPanel.classList.toggle("show")
    }
}
loadMilestones()